//import foo from "./foo";

// Code Splitting
//  rollup ./src/main2.js -f cjs -d dist
export default function() {
    //console.log(foo);
    import("./foo.js").then(({ default: foo }) => console.log(foo))
}

