import { useState, useEffect, useRef } from "react";
import { supabase } from "./supabase.js";

// ─── AS Maths (7356) Topics — Year 12 / AS only ───────────────────────────────

const topicsMaths = {
  Pure: {
    "Proof": [
      "Proof by deduction — algebraic argument from known facts",
      "Proof by exhaustion — check all possible cases",
      "Disproof by counterexample — find one case that fails",
      "Understand what constitutes a valid mathematical proof",
    ],
    "Algebra & Functions": [
      "Index laws — multiply, divide, brackets, zero, negative, fractional",
      "Expand brackets including triple brackets",
      "Factorise — common factor, difference of two squares, quadratics",
      "Simplify algebraic fractions — cancel, multiply, divide",
      "Add and subtract algebraic fractions",
      "Surds — simplify, add, multiply",
      "Rationalise denominators — a+b√c form",
      "Solve quadratics — factorising, formula, completing the square",
      "Completing the square — form a(x+b)²+c",
      "Discriminant — b²−4ac, conditions for roots",
      "Solve simultaneous equations — linear/linear and linear/quadratic",
      "Solve linear inequalities — represent on number line",
      "Solve quadratic inequalities — sketch and identify range",
      "Factor theorem — f(a)=0 means (x−a) is a factor",
      "Algebraic long division",
      "Composite functions fg(x)",
      "Inverse functions — find f⁻¹(x), domain and range",
      "Modulus function — |x|, sketch and solve equations",
      "Transformations — translations, stretches, reflections of y=f(x)",
    ],
    "Coordinate Geometry": [
      "Gradient of a straight line",
      "y=mx+c and ax+by+c=0 forms",
      "Equation of line through a point with given gradient",
      "Equation of line through two points",
      "Parallel and perpendicular lines",
      "Midpoint of a line segment",
      "Distance between two points",
      "Equation of a circle — (x−a)²+(y−b)²=r²",
      "Expand circle equation and complete the square to find centre/radius",
      "Verify a point lies on a circle",
      "Tangent to a circle — perpendicular to radius at point of contact",
      "Perpendicular bisector of a chord passes through centre",
      "Intersection of line and circle — substitution then discriminant",
    ],
    "Sequences & Series": [
      "Arithmetic sequences — find nth term a+(n−1)d",
      "Sum of arithmetic series — Sn = n/2(2a+(n−1)d)",
      "Geometric sequences — find nth term arⁿ⁻¹",
      "Sum of geometric series — Sn = a(1−rⁿ)/(1−r)",
      "Sum to infinity — S∞ = a/(1−r), condition |r|<1",
      "Sigma notation — interpret and evaluate",
      "Binomial expansion of (a+bx)ⁿ for positive integer n",
      "Binomial coefficients — ⁿCr notation and Pascal's triangle",
      "Find specific terms in a binomial expansion",
      "Use binomial expansion as an approximation",
    ],
    "Trigonometry": [
      "Exact values — sin, cos, tan of 0°, 30°, 45°, 60°, 90°",
      "Sine rule — a/sinA = b/sinB = c/sinC",
      "Cosine rule — a²=b²+c²−2bc cosA",
      "Area of triangle — ½ab sinC",
      "Trig identity — sin²θ + cos²θ ≡ 1",
      "Trig identity — tanθ ≡ sinθ/cosθ",
      "Graphs of sinx, cosx, tanx — shape, period, symmetry",
      "Transformations of trig graphs",
      "Solve trig equations in degrees and radians",
      "Solve equations using identities — reduce to one trig function",
      "Radians — convert between degrees and radians",
      "Arc length — s = rθ",
      "Area of sector — A = ½r²θ",
      "Small angle approximations — sinθ≈θ, cosθ≈1−θ²/2, tanθ≈θ",
    ],
    "Exponentials & Logarithms": [
      "Graph of y = aˣ — shape, intercepts, asymptote",
      "Graph of y = eˣ and y = ln x",
      "Laws of logarithms — log(ab), log(a/b), log(aⁿ)",
      "Solve equations of the form aˣ = b using logarithms",
      "Solve equations involving eˣ and ln x",
      "Natural logarithm ln and its relationship to eˣ",
      "Exponential growth and decay — y = Aeᵏᵗ",
      "Use logarithms to linearise — log y = log a + n log x",
    ],
    "Differentiation": [
      "Differentiate xⁿ for any rational n",
      "Differentiate polynomials term by term",
      "Differentiation from first principles — definition as a limit",
      "Find gradient of curve at a point",
      "Find equation of tangent at a point",
      "Find equation of normal at a point",
      "Find stationary points — set dy/dx = 0",
      "Second derivative d²y/dx² — nature of stationary points",
      "Determine where function is increasing/decreasing",
      "Sketch curves using differentiation — stationary points, behaviour",
    ],
    "Integration": [
      "Integrate xⁿ for any rational n (n≠−1)",
      "Integrate polynomials — include constant of integration",
      "Definite integration — evaluate between limits",
      "Area under curve — ∫ₐᵇ f(x) dx",
      "Area below x-axis — take absolute value",
      "Area between a curve and a line",
      "Trapezium rule — approximate area, more strips = more accurate",
    ],
  },
  Mechanics: {
    "Modelling": [
      "Particle — mass but no size, no rotation",
      "Rod — rigid, one-dimensional",
      "Light string — massless, tension same throughout",
      "Smooth surface — no friction",
      "Rough surface — friction acts",
      "Inextensible string — constant length, same speed throughout",
      "Understand limitations of models",
    ],
    "Kinematics": [
      "Displacement, velocity, acceleration — definitions and units",
      "SUVAT: v = u + at",
      "SUVAT: s = ut + ½at²",
      "SUVAT: v² = u² + 2as",
      "SUVAT: s = ½(u+v)t",
      "Choose correct SUVAT equation for given information",
      "Vertical motion under gravity — g = 9.8 ms⁻²",
      "Maximum height — v = 0 at top",
      "Time of flight for vertical motion",
      "Displacement-time graph — gradient = velocity",
      "Velocity-time graph — gradient = acceleration",
      "Velocity-time graph — area = displacement",
      "Interpret and sketch motion graphs",
    ],
    "Forces & Newton's Laws": [
      "Weight — W = mg",
      "Normal reaction — perpendicular to surface",
      "Tension in strings",
      "Thrust/compression in rods",
      "Resultant force — vector sum",
      "Resolve forces horizontally and vertically",
      "Newton's first law — equilibrium when resultant = 0",
      "Newton's second law — F = ma",
      "Newton's third law — equal and opposite reaction pairs",
      "Friction force — F = μR at limiting equilibrium",
      "F ≤ μR when not at limiting equilibrium",
      "Coefficient of friction μ",
    ],
    "Inclined Planes": [
      "Resolve parallel to slope — component of weight = mg sinθ",
      "Resolve perpendicular to slope — R = mg cosθ",
      "Friction acts along slope — opposing motion or tendency to move",
      "Equilibrium on a slope — balance forces parallel and perpendicular",
      "Acceleration on a slope — apply F=ma along slope",
      "Check if object slides — compare mg sinθ with μmg cosθ",
    ],
    "Connected Particles": [
      "String over smooth pulley — tension same on both sides",
      "Apply F=ma to each particle separately",
      "Eliminate T to find acceleration",
      "Find tension using one equation with known acceleration",
      "Particle on table connected to hanging particle",
    ],
  },
  Statistics: {
    "Data Collection": [
      "Population vs sample — definitions",
      "Census vs sample — advantages and disadvantages",
      "Simple random sampling — every member has equal chance",
      "Systematic sampling — every kth member",
      "Stratified sampling — proportional from each stratum",
      "Opportunity/convenience sampling — use who is available",
      "Quota sampling — fixed number from each category",
      "Advantages and disadvantages of each method",
      "Sampling frame — list of population members",
      "Bias — how it arises and how to reduce it",
    ],
    "Data Representation": [
      "Frequency tables — grouped and ungrouped",
      "Histograms — frequency density = frequency ÷ class width",
      "Interpret histograms — find frequencies from bars",
      "Cumulative frequency graphs — plot at upper class boundary",
      "Box plots — minimum, Q1, median, Q3, maximum",
      "Outliers — below Q1 − 1.5×IQR or above Q3 + 1.5×IQR",
      "Stem and leaf diagrams — back-to-back for comparison",
      "Compare distributions — refer to measure of location AND spread",
    ],
    "Measures of Location": [
      "Mean — Σx/n or Σfx/Σf for grouped data",
      "Median — middle value or from cumulative frequency",
      "Mode — most frequent value or modal class",
      "Quartiles — Q1, Q2, Q3 from ordered data or cumulative frequency",
      "Percentiles — Pth percentile",
      "Coding — if y = (x−a)/b then ȳ = (x̄−a)/b",
    ],
    "Measures of Spread": [
      "Range — max minus min",
      "Interquartile range — IQR = Q3 − Q1",
      "Variance — Σ(x−x̄)²/n or Σx²/n − x̄²",
      "Standard deviation — square root of variance",
      "Coded standard deviation — sₓ = b × s_y if y=(x−a)/b",
      "Choose appropriate measure — IQR for skewed, SD for symmetric",
    ],
    "Correlation & Regression": [
      "Scatter diagrams — plot and interpret",
      "Positive, negative, zero correlation",
      "Pearson's product moment correlation coefficient r",
      "Interpret value of r — strength and direction",
      "Regression line y on x — y = a + bx",
      "Calculate a and b from summary statistics",
      "Interpret gradient and intercept in context",
      "Interpolation vs extrapolation — reliability",
      "Correlation does not imply causation",
    ],
    "Probability": [
      "Sample space and events",
      "P(A) = number of favourable outcomes / total outcomes",
      "Complement — P(A') = 1 − P(A)",
      "Addition rule — P(A∪B) = P(A) + P(B) − P(A∩B)",
      "Mutually exclusive events — P(A∩B) = 0",
      "Independent events — P(A∩B) = P(A) × P(B)",
      "Conditional probability — P(A|B) = P(A∩B)/P(B)",
      "Venn diagrams",
      "Two-way tables",
      "Tree diagrams — multiply along branches, add between branches",
    ],
    "Binomial Distribution": [
      "Conditions for binomial — fixed n, constant p, independent, two outcomes",
      "Notation — X ~ B(n, p)",
      "P(X = r) = ⁿCr × pʳ × (1−p)ⁿ⁻ʳ",
      "Mean of binomial — E(X) = np",
      "Variance of binomial — Var(X) = np(1−p)",
      "P(X ≤ r) — cumulative probability from tables or calculator",
      "P(X ≥ r) = 1 − P(X ≤ r−1)",
      "P(X < r) = P(X ≤ r−1)",
      "P(X > r) = 1 − P(X ≤ r)",
    ],
    "Hypothesis Testing": [
      "Null hypothesis H₀ — what you assume to be true",
      "Alternative hypothesis H₁ — one-tailed or two-tailed",
      "Test statistic — the observed value",
      "Critical region — values that lead to rejection of H₀",
      "Critical value — boundary of critical region",
      "Significance level — probability of rejecting H₀ when true",
      "Actual significance level — P(in critical region | H₀ true)",
      "p-value method — compare p-value to significance level",
      "One-tailed test — H₁: p > k or H₁: p < k",
      "Two-tailed test — H₁: p ≠ k, halve significance level each tail",
      "State conclusion in context — do not just say reject H₀",
      "Type I error — rejecting H₀ when it is actually true",
    ],
  },
};

// ─── AS Further Maths (7366) Topics — Year 12 / AS only ──────────────────────

const topicsFM = {
  "Core Pure": {
    "Proof by Induction": [
      "Principle of induction — base case, inductive step, conclusion",
      "Prove summation results — e.g. Σr = n(n+1)/2",
      "Prove divisibility results — e.g. f(k+1)−f(k) divisible by d",
      "Prove matrix power results",
      "Write fully rigorous proof with correct concluding statement",
    ],
    "Complex Numbers": [
      "Definition — i² = −1, real part Re(z) and imaginary part Im(z)",
      "Add, subtract, multiply complex numbers algebraically",
      "Complex conjugate — z* = a − bi",
      "Divide complex numbers — multiply numerator and denominator by conjugate",
      "Complex roots of real polynomials come in conjugate pairs",
      "Solve quadratics with complex roots using the quadratic formula",
      "Solve cubics/quartics given one complex root",
      "Argand diagram — plot z = a + bi as point (a, b)",
      "Modulus — |z| = √(a² + b²)",
      "Argument — arg(z), principal value in (−π, π], in radians",
      "Modulus-argument form — z = r(cosθ + i sinθ)",
      "Multiply in modulus-argument form — multiply moduli, add arguments",
      "Divide in modulus-argument form — divide moduli, subtract arguments",
      "Locus — |z − z₁| = r is a circle, centre z₁, radius r",
      "Locus — arg(z − z₁) = θ is a half-line from z₁ at angle θ",
      "Locus — |z − z₁| = |z − z₂| is perpendicular bisector of z₁z₂",
      "Sketch and interpret regions in the Argand diagram",
    ],
    "Matrices": [
      "Matrix notation — order m×n, elements aᵢⱼ",
      "Add and subtract matrices — same order only",
      "Scalar multiplication of a matrix",
      "Matrix multiplication — row × column, check orders are compatible",
      "Matrix multiplication is non-commutative — AB ≠ BA in general",
      "Zero matrix O and identity matrix I",
      "Determinant of 2×2 matrix — det(A) = ad − bc",
      "Singular matrix — det = 0, no inverse exists",
      "Inverse of 2×2 matrix — A⁻¹ = (1/det) [[d,−b],[−c,a]]",
      "AA⁻¹ = A⁻¹A = I",
      "Solve linear system Ax = b → x = A⁻¹b",
      "Determinant of 3×3 matrix — cofactor expansion along a row",
      "Inverse of 3×3 matrix — find adjugate and divide by det",
      "2D linear transformations — rotation, reflection, enlargement, stretch",
      "Identify transformation from its matrix (what happens to unit vectors?)",
      "Composition of transformations — AB represents B then A",
      "Invariant points — solve Ax = x",
      "Invariant lines — every point on the line maps to a point on the line",
    ],
    "Further Algebra & Functions": [
      "Roots of quadratic — α+β = −b/a, αβ = c/a",
      "Roots of cubic — Σα = −b/a, Σαβ = c/a, αβγ = −d/a",
      "Roots of quartic — Σα, Σαβ, Σαβγ, αβγδ in terms of coefficients",
      "Form new polynomial with roots that are a function of α, β (e.g. 2α, α², 1/α, α+k)",
      "Standard series — Σr = n(n+1)/2",
      "Standard series — Σr² = n(n+1)(2n+1)/6",
      "Standard series — Σr³ = [n(n+1)/2]²",
      "Evaluate Σf(r) using standard results and algebra",
      "Method of differences — identify telescoping form, collapse the sum",
      "Sum series between limits (e.g. Σ from r=N+1 to 2N)",
      "Partial fractions — distinct linear factors",
      "Partial fractions — repeated linear factors",
    ],
    "Further Calculus": [
      "Volumes of revolution about x-axis — V = π∫y² dx",
      "Volumes of revolution about y-axis — V = π∫x² dy",
      "Integration by substitution — choose u, change limits for definite integrals",
      "Integration by parts — ∫u(dv/dx)dx = uv − ∫v(du/dx)dx",
      "Repeated integration by parts (e.g. ∫x²eˣ dx)",
      "Use partial fractions in integration — gives ln terms",
      "Integrate using double angle and other trig identities",
      "Integrate 1/(a²+x²) → (1/a)arctan(x/a)",
      "Integrate 1/√(a²−x²) → arcsin(x/a)",
      "First-order separable differential equations — separate variables, integrate both sides",
      "Apply boundary conditions to find particular solution",
    ],
    "Further Vectors": [
      "Scalar (dot) product — a·b = a₁b₁+a₂b₂+a₃b₃ = |a||b|cosθ",
      "Use dot product to find angle between vectors",
      "Show two vectors are perpendicular — a·b = 0",
      "Vector equation of a line — r = a + λb",
      "Convert line to Cartesian form — (x−a₁)/b₁ = (y−a₂)/b₂ = (z−a₃)/b₃",
      "Find whether two lines intersect or are skew",
      "Find angle between two lines using direction vectors",
      "Equation of a plane — r·n = d",
      "Cartesian equation of plane — ax+by+cz = d",
      "Normal vector to a plane",
      "Find equation of plane given 3 points",
      "Angle between two planes — angle between normals",
      "Angle between a line and a plane",
      "Point of intersection of a line and a plane",
      "Distance from a point to a plane — formula",
      "Cross product a × b — magnitude |a||b|sinθ, direction perpendicular to both",
      "Use cross product to find normal to a plane",
    ],
  },
  "Further Mechanics": {
    "Momentum & Impulse": [
      "Momentum — p = mv",
      "Impulse — J = Ft = mv − mu (impulse-momentum theorem)",
      "Conservation of linear momentum — total momentum constant in absence of external forces",
      "Apply conservation of momentum to collisions and explosions",
    ],
    "Collisions": [
      "Newton's law of restitution — e = speed of separation / speed of approach",
      "Perfectly elastic collision — e = 1, KE conserved",
      "Perfectly inelastic collision — e = 0, particles coalesce",
      "Collision between two particles — use momentum and restitution together",
      "Collision with a wall — object bounces back, wall doesn't move",
      "Find e, velocity after collision, or loss in KE",
      "Direction of motion may reverse if e is large enough",
    ],
    "Work, Energy & Power": [
      "Work done by a constant force — W = Fs cosθ",
      "Kinetic energy — KE = ½mv²",
      "Gravitational potential energy — GPE = mgh",
      "Work-energy theorem — net work done = change in KE",
      "Conservation of mechanical energy — no friction or driving force",
      "Energy equation with friction — work done by friction = loss in mech. energy",
      "Power — P = Fv (instantaneous power)",
      "Driving force and resistance — P = Fv, apply F=ma if accelerating",
    ],
  },
  "Further Statistics": {
    "Discrete Random Variables": [
      "Discrete random variable — definition, probability distribution table",
      "E(X) = Σ x P(X=x)",
      "E(X²) = Σ x² P(X=x)",
      "Var(X) = E(X²) − [E(X)]²",
      "E(aX+b) = aE(X) + b",
      "Var(aX+b) = a² Var(X)",
      "Geometric distribution — X ~ Geo(p), P(X=r) = (1−p)^{r−1} p",
      "E(X) = 1/p for geometric, Var(X) = (1−p)/p²",
    ],
    "Poisson Distribution": [
      "Conditions — events occur randomly, independently, at constant average rate",
      "Notation — X ~ Po(λ)",
      "P(X=r) = e^{−λ}λʳ/r!",
      "E(X) = Var(X) = λ",
      "Poisson as approximation to Binomial — n large, p small, λ = np",
      "Cumulative Poisson probabilities — tables or calculator",
      "Sum of independent Poisson variables — X+Y ~ Po(λ₁+λ₂)",
    ],
    "Normal Distribution": [
      "Normal distribution — X ~ N(μ, σ²), bell-shaped, symmetric about μ",
      "Standardise — Z = (X−μ)/σ, Z ~ N(0,1)",
      "Use standard normal tables — P(Z < z)",
      "P(Z > z) = 1 − P(Z < z)",
      "P(Z < −z) = P(Z > z) by symmetry",
      "Find probabilities from any N(μ, σ²)",
      "Inverse normal — find x or μ or σ given a probability",
      "Normal approximation to Binomial — n large, p not extreme, μ=np, σ²=np(1−p)",
      "Continuity correction when approximating a discrete distribution",
    ],
  },
  "Discrete Maths": {
    "Algorithms": [
      "Describe, trace and dry-run an algorithm",
      "Bubble sort — compare adjacent pairs, repeat passes",
      "Quick sort — choose pivot, partition, recurse",
      "Counting comparisons and swaps for sorting algorithms",
      "Binary search — halve search space at each step",
      "Order of an algorithm — understand O(n) vs O(n²)",
    ],
    "Graph Theory": [
      "Vertices, edges, degree — sum of degrees = 2 × edges",
      "Simple, connected, directed and weighted graphs",
      "Adjacency matrix and adjacency list representations",
      "Walk, trail, path, cycle — definitions",
      "Eulerian graph — every vertex even degree, Eulerian trail possible",
      "Semi-Eulerian — exactly two vertices of odd degree",
      "Hamiltonian path/cycle — visits every vertex exactly once",
      "Planar graphs and Euler's formula V − E + F = 2",
    ],
    "Trees & Networks": [
      "Tree — connected, no cycles; n vertices → n−1 edges",
      "Spanning tree — spans all vertices, no cycles",
      "Kruskal's algorithm — add cheapest edge that doesn't form a cycle",
      "Prim's algorithm — grow tree from one vertex, always add cheapest edge",
      "Compare Kruskal's and Prim's — same result, different process",
      "Dijkstra's algorithm — find shortest path from source to all vertices",
      "Trace Dijkstra's — permanent and temporary labels",
    ],
    "Route Inspection & Travelling Salesman": [
      "Route inspection (Chinese Postman) — traverse every edge at least once",
      "Identify odd-degree vertices — must pair them up",
      "Find minimum weight matching of odd vertices",
      "Minimum route inspection distance = total weight + weight of matching",
      "Travelling Salesman Problem (TSP) — visit every vertex, return to start",
      "Upper bound for TSP — use a Hamiltonian cycle (e.g. nearest neighbour)",
      "Lower bound for TSP — remove a vertex, find MST of remainder, add two cheapest edges to removed vertex",
      "Improve bounds — repeat with different vertices removed",
    ],
    "Linear Programming": [
      "Formulate constraints as linear inequalities from a word problem",
      "Define the objective function to maximise or minimise",
      "Feasible region — intersection of all constraint half-planes",
      "Graph the feasible region — shade correctly",
      "Optimal vertex — test objective function at each vertex of feasible region",
      "Integer programming — optimal integer solution may not be at LP vertex",
    ],
  },
};

// ─── Config ───────────────────────────────────────────────────────────────────

const SUBJECTS = [
  { id: "maths", label: "AS Maths",         code: "7356" },
  { id: "fm",    label: "AS Further Maths", code: "7366" },
];

const SECTION_COLORS = {
  maths: {
    Pure:       { accent: "#818cf8" },
    Mechanics:  { accent: "#34d399" },
    Statistics: { accent: "#fbbf24" },
  },
  fm: {
    "Core Pure":         { accent: "#c084fc" },
    "Further Mechanics": { accent: "#2dd4bf" },
    "Further Statistics":{ accent: "#f472b6" },
    "Discrete Maths":    { accent: "#fb923c" },
  },
};

const PEOPLE = [
  { id: "adi",    label: "Adi",    accent: "#a78bfa", dim: "#a78bfa30", glow: "#a78bfa14" },
  { id: "ahmed",  label: "Ahmed",  accent: "#38bdf8", dim: "#38bdf830", glow: "#38bdf814" },
  { id: "parees", label: "Parees", accent: "#fb7185", dim: "#fb718530", glow: "#fb718514" },
  { id: "group",  label: "Group",  accent: "#fb923c", dim: "#fb923c30", glow: "#fb923c14" },
];

// FM items are stored in Supabase with a "FM::" prefix so they don't collide
const FM_PREFIX = "FM::";
const encode = (subject, item) => subject === "fm" ? FM_PREFIX + item : item;
const decodeSubject = (raw) => raw.startsWith(FM_PREFIX) ? "fm" : "maths";
const decodeItem  = (raw) => raw.startsWith(FM_PREFIX) ? raw.slice(FM_PREFIX.length) : raw;

// ─── Component ────────────────────────────────────────────────────────────────

export default function Checklist() {
  const [activeSubject, setActiveSubject] = useState("maths");
  const [activePerson,  setActivePerson]  = useState("ahmed");
  const [filter,        setFilter]        = useState("all");
  const [collapsed,     setCollapsed]     = useState({});
  const [grpCollapsed,  setGrpCollapsed]  = useState({});
  const [showReset,     setShowReset]     = useState(false);
  const [syncStatus,    setSyncStatus]    = useState("loading");

  // allData: { [personId]: { maths: { [item]: state }, fm: { [item]: state } } }
  const [allData, setAllData] = useState(() =>
    Object.fromEntries(PEOPLE.map(p => [p.id, { maths: {}, fm: {} }]))
  );

  const pendingRef = useRef({});

  const topics        = activeSubject === "maths" ? topicsMaths : topicsFM;
  const sectionColors = SECTION_COLORS[activeSubject];
  const allItems      = Object.values(topics).flatMap(s => Object.values(s).flat());
  const totalTopics   = allItems.length;

  const person     = PEOPLE.find(p => p.id === activePerson);
  const personData = allData[activePerson]?.[activeSubject] || {};

  // ── Load all data from Supabase on mount ──────────────────────────────────
  useEffect(() => {
    let channel;

    async function loadAll() {
      const { data, error } = await supabase
        .from("checklist_progress")
        .select("person, item, state");

      if (error) {
        setSyncStatus("offline");
        // Offline fallback: read from localStorage
        const fallback = Object.fromEntries(PEOPLE.map(p => [p.id, { maths: {}, fm: {} }]));
        for (const p of PEOPLE) {
          try {
            fallback[p.id].maths = JSON.parse(localStorage.getItem(`aqa-7356-${p.id}`) || "{}");
            fallback[p.id].fm    = JSON.parse(localStorage.getItem(`aqa-7366-${p.id}`) || "{}");
          } catch { /* ignore */ }
        }
        setAllData(fallback);
        return;
      }

      const built = Object.fromEntries(PEOPLE.map(p => [p.id, { maths: {}, fm: {} }]));
      for (const row of data) {
        if (!built[row.person]) continue;
        const subj = decodeSubject(row.item);
        const text = decodeItem(row.item);
        built[row.person][subj][text] = row.state;
      }
      setAllData(built);
      setSyncStatus("live");

      channel = supabase
        .channel("checklist_changes")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "checklist_progress" },
          (payload) => {
            const row = payload.new || payload.old;
            if (!row?.person || !row?.item) return;
            const subj = decodeSubject(row.item);
            const text = decodeItem(row.item);
            setAllData(prev => {
              const subjMap = { ...prev[row.person]?.[subj] };
              if (payload.eventType === "DELETE") {
                delete subjMap[text];
              } else {
                subjMap[text] = row.state;
              }
              return {
                ...prev,
                [row.person]: { ...prev[row.person], [subj]: subjMap },
              };
            });
          }
        )
        .subscribe((status) => {
          if (status === "SUBSCRIBED")                        setSyncStatus("live");
          if (status === "CLOSED" || status === "CHANNEL_ERROR") setSyncStatus("offline");
        });
    }

    loadAll();
    return () => { if (channel) supabase.removeChannel(channel); };
  }, []);

  const getState = (item, pid, subj) => {
    const data = allData[pid ?? activePerson]?.[subj ?? activeSubject] || {};
    return data[item] || "not-started";
  };

  const cycleItem = (item) => {
    const cur  = getState(item);
    const next = cur === "not-started" ? "started"
               : cur === "started"     ? "done"
               :                        "not-started";

    const newSubjData = { ...personData, [item]: next };
    setAllData(prev => ({
      ...prev,
      [activePerson]: { ...prev[activePerson], [activeSubject]: newSubjData },
    }));

    try {
      localStorage.setItem(`aqa-${activeSubject === "maths" ? "7356" : "7366"}-${activePerson}`, JSON.stringify(newSubjData));
    } catch { /* ignore */ }

    const key = `${activePerson}::${activeSubject}::${item}`;
    clearTimeout(pendingRef.current[key]);
    pendingRef.current[key] = setTimeout(async () => {
      const encoded = encode(activeSubject, item);
      if (next === "not-started") {
        await supabase.from("checklist_progress").delete()
          .eq("person", activePerson).eq("item", encoded);
      } else {
        await supabase.from("checklist_progress").upsert(
          { person: activePerson, item: encoded, state: next, updated_at: new Date().toISOString() },
          { onConflict: "person,item" }
        );
      }
    }, 300);
  };

  const handleReset = async () => {
    setAllData(prev => ({
      ...prev,
      [activePerson]: { ...prev[activePerson], [activeSubject]: {} },
    }));
    setShowReset(false);
    try {
      localStorage.removeItem(`aqa-${activeSubject === "maths" ? "7356" : "7366"}-${activePerson}`);
    } catch { /* ignore */ }

    // Delete all rows for this person + subject from Supabase
    const prefix = activeSubject === "fm" ? FM_PREFIX : null;
    if (prefix) {
      // FM rows start with "FM::"
      const { data: rows } = await supabase
        .from("checklist_progress")
        .select("item")
        .eq("person", activePerson)
        .like("item", `${FM_PREFIX}%`);
      if (rows?.length) {
        await supabase.from("checklist_progress").delete()
          .eq("person", activePerson).in("item", rows.map(r => r.item));
      }
    } else {
      // Maths rows do NOT start with "FM::"
      const { data: rows } = await supabase
        .from("checklist_progress")
        .select("item")
        .eq("person", activePerson);
      const mathsRows = (rows || []).filter(r => !r.item.startsWith(FM_PREFIX));
      if (mathsRows.length) {
        await supabase.from("checklist_progress").delete()
          .eq("person", activePerson).in("item", mathsRows.map(r => r.item));
      }
    }
  };

  const getStats = (pid, subj) => {
    const s    = subj ?? activeSubject;
    const tops = s === "maths" ? topicsMaths : topicsFM;
    const its  = Object.values(tops).flatMap(g => Object.values(g).flat());
    const data = allData[pid]?.[s] || {};
    const done    = its.filter(t => (data[t] || "not-started") === "done").length;
    const started = its.filter(t => (data[t] || "not-started") === "started").length;
    return { done, started, total: its.length, pct: Math.round(done / its.length * 100) };
  };

  const doneCount       = allItems.filter(t => getState(t) === "done").length;
  const startedCount    = allItems.filter(t => getState(t) === "started").length;
  const notStartedCount = totalTopics - doneCount - startedCount;
  const pct             = Math.round(doneCount / totalTopics * 100);
  const activePct       = Math.round((doneCount + startedCount) / totalTopics * 100);

  const visible = (item) => {
    const s = getState(item);
    if (filter === "done")        return s === "done";
    if (filter === "started")     return s === "started";
    if (filter === "not-started") return s === "not-started";
    return true;
  };

  const handleSubjectChange = (sid) => {
    setActiveSubject(sid);
    setFilter("all");
    setCollapsed({});
    setGrpCollapsed({});
    setShowReset(false);
  };

  const handlePersonChange = (pid) => {
    setActivePerson(pid);
    setFilter("all");
    setShowReset(false);
  };

  // ── Render ────────────────────────────────────────────────────────────────

  return (
    <div style={{
      minHeight: "100vh",
      background: "#09090b",
      fontFamily: "'Inter', system-ui, sans-serif",
      color: "#e4e4e7",
      paddingBottom: "4rem",
    }}>

      {/* ── Subject switcher ── */}
      <div style={{
        background: "#0d0d0f",
        borderBottom: "1px solid #1c1c1f",
        display: "flex",
        justifyContent: "center",
        gap: "0",
      }}>
        <div style={{ maxWidth: 760, width: "100%", margin: "0 auto", display: "flex", padding: "0.55rem 1rem", gap: "0.5rem" }}>
          {SUBJECTS.map(s => {
            const isActive = s.id === activeSubject;
            const accent   = s.id === "maths" ? "#818cf8" : "#c084fc";
            return (
              <button key={s.id} onClick={() => handleSubjectChange(s.id)} style={{
                padding: "0.38rem 1rem",
                borderRadius: 7,
                border: `1px solid ${isActive ? accent + "50" : "#27272a"}`,
                background: isActive ? accent + "16" : "transparent",
                color: isActive ? accent : "#52525b",
                fontSize: "0.75rem", fontWeight: isActive ? 700 : 400,
                fontFamily: "monospace", letterSpacing: "0.04em",
                cursor: "pointer", transition: "all 0.15s",
              }}>
                {s.label}
                <span style={{ marginLeft: "0.35rem", fontSize: "0.58rem", opacity: 0.6 }}>{s.code}</span>
              </button>
            );
          })}
          {activeSubject === "fm" && (
            <span style={{ marginLeft: "auto", alignSelf: "center", fontSize: "0.58rem", fontFamily: "monospace", color: "#3f3f46" }}>
              tick only your optional section (Mechanics / Statistics / Discrete)
            </span>
          )}
        </div>
      </div>

      {/* ── Sticky person tabs ── */}
      <div style={{
        position: "sticky", top: 0, zIndex: 50,
        background: "#09090bdd",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: "1px solid #1c1c1f",
      }}>
        <div style={{
          maxWidth: 760, margin: "0 auto",
          padding: "0.9rem 1rem 0",
          display: "flex", gap: "0.2rem", flexWrap: "wrap", alignItems: "flex-end",
        }}>
          {PEOPLE.map(p => {
            const { pct: ppct } = getStats(p.id);
            const isActive = p.id === activePerson;
            return (
              <button key={p.id} onClick={() => handlePersonChange(p.id)} style={{
                padding: "0.52rem 1.05rem 0.62rem",
                borderRadius: "8px 8px 0 0",
                border: `1px solid ${isActive ? p.accent + "50" : "#27272a"}`,
                borderBottom: isActive ? `2px solid ${p.accent}` : "1px solid transparent",
                background: isActive ? p.glow : "transparent",
                color: isActive ? p.accent : "#52525b",
                fontSize: "0.8rem", fontWeight: isActive ? 700 : 400,
                fontFamily: "monospace", letterSpacing: "0.02em",
                cursor: "pointer", transition: "all 0.15s",
                display: "flex", alignItems: "center", gap: "0.42rem",
              }}>
                <span style={{
                  width: 22, height: 22, borderRadius: "50%",
                  background: isActive ? p.accent : "#27272a",
                  color: isActive ? "#09090b" : "#52525b",
                  fontSize: "0.6rem", fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  flexShrink: 0, transition: "all 0.15s",
                }}>{p.label[0]}</span>
                {p.label}
                <span style={{ fontSize: "0.63rem", color: isActive ? p.accent : "#3f3f46" }}>{ppct}%</span>
              </button>
            );
          })}

          {/* Sync status */}
          <div style={{ marginLeft: "auto", marginBottom: "0.6rem", display: "flex", alignItems: "center", gap: "0.3rem" }}>
            <div style={{
              width: 6, height: 6, borderRadius: "50%",
              background: syncStatus === "live" ? "#34d399" : syncStatus === "loading" ? "#fbbf24" : "#ef4444",
              boxShadow: syncStatus === "live" ? "0 0 6px #34d399" : "none",
            }} />
            <span style={{ fontSize: "0.58rem", fontFamily: "monospace", color: "#3f3f46" }}>
              {syncStatus === "live" ? "live sync" : syncStatus === "loading" ? "connecting…" : "offline"}
            </span>
          </div>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ maxWidth: 760, margin: "0 auto", padding: "1.75rem 1rem 0" }}>

        {/* Header */}
        <div style={{ marginBottom: "2rem" }}>
          <p style={{
            margin: "0 0 0.35rem",
            fontSize: "0.6rem", letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#3f3f46", fontFamily: "monospace",
          }}>
            AQA · {SUBJECTS.find(s => s.id === activeSubject).label} · {SUBJECTS.find(s => s.id === activeSubject).code}
          </p>

          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: "0.75rem" }}>
            <div>
              <h1 style={{
                margin: "0 0 0.2rem",
                fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 700,
                color: "#fafafa", letterSpacing: "-0.03em", lineHeight: 1.1,
              }}>Full Topic Checklist</h1>
              <div style={{ display: "flex", alignItems: "center", gap: "0.38rem" }}>
                <div style={{ width: 7, height: 7, borderRadius: "50%", background: person.accent }} />
                <span style={{ fontSize: "0.8rem", color: person.accent, fontWeight: 600, fontFamily: "monospace" }}>
                  {person.label}
                </span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontSize: "2.6rem", fontWeight: 800, color: "#fafafa", lineHeight: 1, letterSpacing: "-0.05em" }}>
                {syncStatus === "loading"
                  ? <span style={{ fontSize: "1.2rem", color: "#27272a" }}>—</span>
                  : <>{pct}<span style={{ fontSize: "1.1rem", color: "#52525b" }}>%</span></>
                }
              </div>
              <div style={{ fontSize: "0.67rem", color: "#52525b", fontFamily: "monospace" }}>
                {doneCount} / {totalTopics} done
              </div>
            </div>
          </div>

          {/* Stacked progress bar */}
          <div style={{ marginTop: "1rem", height: 7, background: "#18181b", borderRadius: 9999, overflow: "hidden", position: "relative" }}>
            <div style={{ position: "absolute", inset: 0, width: `${activePct}%`, background: person.dim, borderRadius: 9999, transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)" }} />
            <div style={{ position: "absolute", inset: 0, width: `${pct}%`, background: person.accent, borderRadius: 9999, transition: "width 0.5s cubic-bezier(0.4,0,0.2,1)" }} />
          </div>

          {/* Stats pills */}
          <div style={{ display: "flex", gap: "0.4rem", marginTop: "0.72rem", flexWrap: "wrap" }}>
            <span style={{ fontSize: "0.65rem", fontFamily: "monospace", color: person.accent, background: person.glow, padding: "3px 9px", borderRadius: 999, border: `1px solid ${person.accent}30` }}>✓ {doneCount} done</span>
            <span style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "#a1a1aa", background: "#18181b", padding: "3px 9px", borderRadius: 999, border: "1px solid #27272a" }}>– {startedCount} in progress</span>
            <span style={{ fontSize: "0.65rem", fontFamily: "monospace", color: "#52525b", background: "#18181b", padding: "3px 9px", borderRadius: 999, border: "1px solid #1c1c1f" }}>○ {notStartedCount} not started</span>
          </div>

          {/* Per-section pills */}
          <div style={{ display: "flex", gap: "0.7rem", marginTop: "0.55rem", flexWrap: "wrap" }}>
            {Object.entries(topics).map(([sec, groups]) => {
              const items   = Object.values(groups).flat();
              const done    = items.filter(t => getState(t) === "done").length;
              const started = items.filter(t => getState(t) === "started").length;
              const col     = sectionColors[sec];
              return (
                <div key={sec} style={{ display: "flex", alignItems: "center", gap: "0.32rem", fontSize: "0.67rem", fontFamily: "monospace", color: "#52525b" }}>
                  <div style={{ width: 6, height: 6, borderRadius: "50%", background: col.accent }} />
                  <span style={{ color: "#71717a" }}>{sec}</span>
                  <span style={{ color: col.accent }}>{done}/{items.length}</span>
                  {started > 0 && <span style={{ color: "#3f3f46" }}>({started}▸)</span>}
                </div>
              );
            })}
          </div>

          {/* Filter + Reset */}
          <div style={{ display: "flex", gap: "0.38rem", marginTop: "0.95rem", alignItems: "center", flexWrap: "wrap" }}>
            {[
              { key: "all",         label: "All" },
              { key: "not-started", label: "Not Started" },
              { key: "started",     label: "In Progress" },
              { key: "done",        label: "Done" },
            ].map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)} style={{
                padding: "0.24rem 0.72rem", borderRadius: 6,
                border: `1px solid ${filter === f.key ? person.accent + "55" : "#27272a"}`,
                background: filter === f.key ? person.glow : "transparent",
                color: filter === f.key ? person.accent : "#52525b",
                fontSize: "0.67rem", fontFamily: "monospace", letterSpacing: "0.06em",
                cursor: "pointer", textTransform: "uppercase", transition: "all 0.15s",
              }}>{f.label}</button>
            ))}
            <div style={{ marginLeft: "auto" }}>
              {showReset ? (
                <span style={{ display: "flex", gap: "0.32rem", alignItems: "center" }}>
                  <span style={{ fontSize: "0.67rem", fontFamily: "monospace", color: "#71717a" }}>Reset {person.label}?</span>
                  <button onClick={handleReset} style={{ padding: "0.2rem 0.5rem", borderRadius: 5, border: "1px solid #ef444455", background: "#ef444412", color: "#ef4444", fontSize: "0.67rem", fontFamily: "monospace", cursor: "pointer" }}>Yes</button>
                  <button onClick={() => setShowReset(false)} style={{ padding: "0.2rem 0.5rem", borderRadius: 5, border: "1px solid #27272a", background: "transparent", color: "#52525b", fontSize: "0.67rem", fontFamily: "monospace", cursor: "pointer" }}>No</button>
                </span>
              ) : (
                <button onClick={() => setShowReset(true)} style={{ padding: "0.2rem 0.58rem", borderRadius: 5, border: "1px solid #1c1c1f", background: "transparent", color: "#3f3f46", fontSize: "0.67rem", fontFamily: "monospace", letterSpacing: "0.06em", cursor: "pointer", textTransform: "uppercase" }}>Reset</button>
              )}
            </div>
          </div>
        </div>

        {/* ── Topic sections ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          {Object.entries(topics).map(([section, groups]) => {
            const col          = sectionColors[section];
            const secItems     = Object.values(groups).flat();
            const secDone      = secItems.filter(t => getState(t) === "done").length;
            const secStarted   = secItems.filter(t => getState(t) === "started").length;
            const secPct       = Math.round(secDone / secItems.length * 100);
            const secActivePct = Math.round((secDone + secStarted) / secItems.length * 100);
            const isSectionCollapsed = collapsed[section];

            return (
              <div key={section} style={{
                border: `1px solid ${col.accent}1e`,
                borderLeft: `3px solid ${col.accent}`,
                borderRadius: "0 10px 10px 0",
                overflow: "hidden", background: "#0d0d0f",
              }}>
                <button
                  onClick={() => setCollapsed(p => ({ ...p, [section]: !p[section] }))}
                  aria-expanded={!isSectionCollapsed}
                  style={{
                    width: "100%", display: "flex", alignItems: "center",
                    justifyContent: "space-between", padding: "0.78rem 1rem",
                    background: `${col.accent}07`, border: "none",
                    borderBottom: isSectionCollapsed ? "none" : `1px solid ${col.accent}12`,
                    cursor: "pointer",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
                    <span style={{ fontSize: "0.93rem", fontWeight: 700, color: "#fafafa", letterSpacing: "-0.01em" }}>{section}</span>
                    <span style={{ fontSize: "0.58rem", fontFamily: "monospace", color: col.accent, background: `${col.accent}18`, padding: "2px 7px", borderRadius: 999 }}>{secDone}/{secItems.length}</span>
                    {secStarted > 0 && <span style={{ fontSize: "0.58rem", fontFamily: "monospace", color: "#71717a", background: "#18181b", padding: "2px 7px", borderRadius: 999 }}>{secStarted} wip</span>}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    <div style={{ width: 62, height: 3, background: "#27272a", borderRadius: 9999, overflow: "hidden", position: "relative" }}>
                      <div style={{ position: "absolute", inset: 0, width: `${secActivePct}%`, background: `${col.accent}35`, borderRadius: 9999 }} />
                      <div style={{ position: "absolute", inset: 0, width: `${secPct}%`, background: col.accent, borderRadius: 9999 }} />
                    </div>
                    <span style={{ color: "#3f3f46", fontSize: "0.7rem", transform: isSectionCollapsed ? "rotate(0deg)" : "rotate(180deg)", transition: "transform 0.2s", display: "inline-block" }}>▲</span>
                  </div>
                </button>

                {!isSectionCollapsed && (
                  <div style={{ padding: "0.45rem 1rem 0.9rem" }}>
                    {Object.entries(groups).map(([group, items]) => {
                      const gDone    = items.filter(t => getState(t) === "done").length;
                      const gStarted = items.filter(t => getState(t) === "started").length;
                      const visItems = items.filter(visible);
                      if (visItems.length === 0) return null;
                      const gKey  = `${section}__${group}`;
                      const gColl = grpCollapsed[gKey];

                      return (
                        <div key={group} style={{ marginBottom: "0.55rem" }}>
                          <button
                            onClick={() => setGrpCollapsed(p => ({ ...p, [gKey]: !p[gKey] }))}
                            aria-expanded={!gColl}
                            style={{
                              width: "100%", display: "flex", alignItems: "center",
                              justifyContent: "space-between", background: "transparent",
                              border: "none", borderBottom: "1px solid #1a1a1e",
                              padding: "0.38rem 0", cursor: "pointer", marginBottom: "0.28rem",
                            }}
                          >
                            <span style={{ fontSize: "0.62rem", fontFamily: "monospace", textTransform: "uppercase", letterSpacing: "0.14em", color: "#52525b" }}>{group}</span>
                            <span style={{ fontSize: "0.58rem", fontFamily: "monospace", color: gDone === items.length ? col.accent : "#3f3f46" }}>
                              {gDone}/{items.length}
                              {gStarted > 0 && <span style={{ color: "#52525b" }}> · {gStarted}▸</span>}
                              {" "}{gColl ? "▶" : "▼"}
                            </span>
                          </button>

                          {!gColl && (
                            <div style={{ display: "flex", flexDirection: "column", gap: "0.06rem" }}>
                              {visItems.map(item => {
                                const state     = getState(item);
                                const isDone    = state === "done";
                                const isStarted = state === "started";

                                return (
                                  <div
                                    key={item}
                                    role="checkbox"
                                    aria-checked={isDone ? "true" : isStarted ? "mixed" : "false"}
                                    aria-label={item}
                                    tabIndex={0}
                                    onClick={() => cycleItem(item)}
                                    onKeyDown={e => { if (e.key === " " || e.key === "Enter") { e.preventDefault(); cycleItem(item); }}}
                                    style={{
                                      display: "flex", alignItems: "flex-start", gap: "0.52rem",
                                      cursor: "pointer", padding: "0.26rem 0.38rem", borderRadius: 5,
                                      background: isDone    ? `${person.accent}0b`
                                                : isStarted ? `${person.accent}06`
                                                : "transparent",
                                      outline: "none", transition: "background 0.12s",
                                    }}
                                  >
                                    <div aria-hidden="true" style={{
                                      flexShrink: 0, marginTop: 3, width: 15, height: 15, borderRadius: 3,
                                      border: isDone    ? `2px solid ${person.accent}`
                                            : isStarted ? `2px solid ${person.accent}80`
                                            : "2px solid #3f3f46",
                                      background: isDone    ? person.accent
                                                : isStarted ? `${person.accent}22`
                                                : "transparent",
                                      display: "flex", alignItems: "center", justifyContent: "center",
                                      transition: "all 0.12s",
                                    }}>
                                      {isDone    && <span style={{ color: "#09090b", fontSize: "0.58rem", fontWeight: 900, lineHeight: 1 }}>✓</span>}
                                      {isStarted && <span style={{ color: person.accent, fontSize: "0.72rem", fontWeight: 900, lineHeight: 1 }}>–</span>}
                                    </div>
                                    <span style={{
                                      fontSize: "0.8rem", lineHeight: 1.55, userSelect: "none",
                                      color: isDone    ? "#3f3f46" : isStarted ? "#a1a1aa" : "#d4d4d8",
                                      textDecoration: isDone ? "line-through" : "none",
                                      transition: "all 0.12s",
                                    }}>{item}</span>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Group overview card ── */}
        <div style={{ marginTop: "2rem", padding: "1rem 1.1rem", background: "#0d0d0f", borderRadius: 10, border: "1px solid #1c1c1f" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.8rem" }}>
            <div style={{ fontSize: "0.58rem", fontFamily: "monospace", letterSpacing: "0.18em", textTransform: "uppercase", color: "#3f3f46" }}>
              Everyone's Progress
            </div>
            <div style={{ display: "flex", gap: "0.3rem" }}>
              {SUBJECTS.map(s => (
                <button key={s.id} onClick={() => handleSubjectChange(s.id)} style={{
                  fontSize: "0.55rem", fontFamily: "monospace", padding: "2px 7px", borderRadius: 5,
                  border: `1px solid ${activeSubject === s.id ? (s.id === "maths" ? "#818cf8" : "#c084fc") + "55" : "#27272a"}`,
                  background: activeSubject === s.id ? (s.id === "maths" ? "#818cf8" : "#c084fc") + "12" : "transparent",
                  color: activeSubject === s.id ? (s.id === "maths" ? "#818cf8" : "#c084fc") : "#3f3f46",
                  cursor: "pointer",
                }}>{s.label}</button>
              ))}
            </div>
          </div>
          <div style={{ display: "flex", gap: "1.1rem", flexWrap: "wrap" }}>
            {PEOPLE.map(p => {
              const { done, started, total, pct: ppct } = getStats(p.id);
              const wipPct    = Math.round((done + started) / total * 100);
              const isCurrent = p.id === activePerson;
              return (
                <div key={p.id} style={{ flex: "1 1 120px", cursor: "pointer" }}
                  onClick={() => handlePersonChange(p.id)} role="button" tabIndex={0}
                  onKeyDown={e => { if (e.key === "Enter" || e.key === " ") handlePersonChange(p.id); }}
                  aria-label={`Switch to ${p.label}`}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.3rem", marginBottom: "0.32rem" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: p.accent }} />
                    <span style={{ fontSize: "0.7rem", fontFamily: "monospace", color: isCurrent ? p.accent : "#71717a", fontWeight: isCurrent ? 700 : 400 }}>{p.label}</span>
                    {isCurrent && <span style={{ fontSize: "0.55rem", color: p.accent, fontFamily: "monospace" }}>← you</span>}
                  </div>
                  <div style={{ height: 4, background: "#18181b", borderRadius: 9999, overflow: "hidden", marginBottom: "0.27rem", position: "relative" }}>
                    <div style={{ position: "absolute", inset: 0, width: `${wipPct}%`, background: `${p.accent}35`, borderRadius: 9999, transition: "width 0.4s" }} />
                    <div style={{ position: "absolute", inset: 0, width: `${ppct}%`, background: p.accent, borderRadius: 9999, transition: "width 0.4s" }} />
                  </div>
                  <div style={{ fontSize: "0.62rem", fontFamily: "monospace", color: "#3f3f46" }}>
                    <span style={{ color: p.accent }}>{ppct}%</span>{" · "}{done}/{total} done
                    {started > 0 && <span style={{ color: "#52525b" }}> · {started} wip</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div style={{ marginTop: "1.1rem", display: "flex", gap: "1.2rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[
            { sym: "○", label: "Not started",           col: "#3f3f46" },
            { sym: "–", label: "In progress  (1 click)", col: "#a1a1aa" },
            { sym: "✓", label: "Done  (2 clicks)",       col: person.accent },
          ].map(l => (
            <span key={l.label} style={{ display: "flex", alignItems: "center", gap: "0.28rem", fontSize: "0.62rem", fontFamily: "monospace", color: "#3f3f46" }}>
              <span style={{ color: l.col }}>{l.sym}</span> {l.label}
            </span>
          ))}
        </div>

        <div style={{ marginTop: "1.5rem", textAlign: "center", fontSize: "0.58rem", fontFamily: "monospace", color: "#27272a" }}>
          Synced via Supabase · AS Maths 7356 · AS Further Maths 7366 · AQA
        </div>
      </div>
    </div>
  );
}
