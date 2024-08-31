////////[Function Overloads]
type Combinable_ = string | number;
type Numeric_ = number | boolean;
type Universal_ = Combinable_ & Numeric_;

function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable_, b: Combinable_) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add(7, 7);
