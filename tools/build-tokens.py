"""
Build tokens.css from v1 DTCG JSON.

Phase 1 token bridge — DESIGN-shared.md 是人讀 SOT,
v1 design-system-all.tokens.json 是 derived（暫時直接 build 來源）。
未來 reality 會教我們 DESIGN.md → tokens.css pipeline 怎麼長。
"""
import json
from pathlib import Path

SOURCE = Path("/Users/kay/Desktop/ruten/design-system-all.tokens.json")
ROOT = Path(__file__).parent.parent
OUT_CSS = ROOT / "packages/ui-web/src/styles/tokens.css"

# Phase 1 範圍：Button 真實需要的完整依賴鏈
# Icon variant 補：comp.icon（button.icon-size alias 到 comp.icon）+ sys/ref.sizing
SCOPE = {
    "ref": ["color", "border", "opacity", "radius", "sizing", "spacing", "typography"],
    "sys": ["color", "opacity", "border", "radius", "sizing", "spacing", "typography"],
    "comp": ["button", "icon"],
}


def flatten(obj, prefix=""):
    """Yield (path, $value, $type) for each leaf token."""
    if isinstance(obj, dict) and "$value" in obj:
        yield (prefix, obj["$value"], obj.get("$type", ""))
        return
    if isinstance(obj, dict):
        for key, val in obj.items():
            if not key.startswith("$"):
                new_prefix = f"{prefix}.{key}" if prefix else key
                yield from flatten(val, new_prefix)


def to_css_var(path):
    return "--" + path.replace(".", "-")


# number tokens that are unitless（不能加 px）
UNITLESS_HINTS = ["opacity", "weight", "line-height", "z-index"]


def resolve_value(v, t, path=""):
    if isinstance(v, dict) and "hex" in v:
        return v["hex"]
    if isinstance(v, str):
        if v.startswith("{") and v.endswith("}"):
            return f"var({to_css_var(v[1:-1])})"
        return v
    if isinstance(v, (int, float)):
        if t == "number":
            if any(hint in path for hint in UNITLESS_HINTS):
                return str(v)
            return f"{v}px"
        return str(v)
    return str(v)


def main():
    with open(SOURCE) as f:
        data = json.load(f)

    lines = [
        "/* Auto-generated from v1 design-system-all.tokens.json */",
        "/* Phase 1 first batch: ref.color + sys.{color,opacity,border,radius,spacing,typography} + comp.button */",
        "",
        ":root {",
    ]

    total = 0
    for layer, cats in SCOPE.items():
        for cat in cats:
            target = data.get(layer, {}).get(cat)
            if target is None:
                continue
            prefix = f"{layer}.{cat}"
            lines.append(f"  /* === {prefix} === */")
            for path, v, t in flatten(target, prefix):
                lines.append(f"  {to_css_var(path)}: {resolve_value(v, t, path)};")
                total += 1
            lines.append("")

    lines.append("}")
    lines.append("")

    OUT_CSS.parent.mkdir(parents=True, exist_ok=True)
    OUT_CSS.write_text("\n".join(lines))
    print(f"Built {OUT_CSS.relative_to(ROOT)}: {total} CSS variables")


if __name__ == "__main__":
    main()
