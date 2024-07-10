import type { KaboomCtx, Vec2, Color } from "kaplay";

export function init(k: KaboomCtx) {
  {
    const prototype = k.Vec2.prototype as any;

    prototype["+"] = function (other: Vec2 | number) {
      if (typeof other === "number") other = k.vec2(other, other);
      return k.vec2(this.x + other.x, this.y + other.y);
    };

    prototype["-"] = function (other: Vec2 | number) {
      if (typeof other === "number") other = k.vec2(other, other);
      return k.vec2(this.x - other.x, this.y - other.y);
    };

    prototype["*"] = function (other: Vec2 | number) {
      if (typeof other === "number") other = k.vec2(other, other);
      return k.vec2(this.x * other.x, this.y * other.y);
    };

    prototype["/"] = function (other: Vec2 | number) {
      if (typeof other === "number") other = k.vec2(other, other);
      return k.vec2(this.x / other.x, this.y / other.y);
    };
  }

  {
    const prototype = k.Color.prototype as any;

    prototype["+"] = function (other: Color | number) {
      if (typeof other === "number") other = k.rgb(other, other, other);
      return k.rgb(this.r + other.r, this.g + other.g, this.b + other.b);
    };

    prototype["-"] = function (other: Color | number) {
      if (typeof other === "number") other = k.rgb(other, other, other);
      return k.rgb(this.r - other.r, this.g - other.g, this.b - other.b);
    };

    prototype["*"] = function (other: Color | number) {
      if (typeof other === "number") other = k.rgb(other, other, other);
      return k.rgb(this.r * other.r, this.g * other.g, this.b * other.b);
    };

    prototype["/"] = function (other: Color | number) {
      if (typeof other === "number") other = k.rgb(other, other, other);
      return k.rgb(this.r / other.r, this.g / other.g, this.b / other.b);
    };
  }
}
