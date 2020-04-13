package main

import "fmt"

func main() {
	q1 := []int32{0, 4}
	queries := [][]int32{q1}
	// queries = append(queries, []int32{0,0})
	resp := countSubstrings("aabaa", queries)
	fmt.Printf("output: %v\n", resp)
}

type void struct{}

func countSubstrings(s string, queries [][]int32) []int32 {
	slice := []byte(s)
	fmt.Printf("slice: %s\n", slice)

	subs := []int32{}

	for i := 0; i < len(queries); i++ {
		query := queries[i]
		fmt.Printf("query: %v\n", query)

		var member void
		set := make(map[string]void)

		for x := query[0]; x < query[1]+1; x++ {
			for y := x; y < query[1]+1; y++ {
				key := slice[x : y+1]
				set[string(key)] = member
			}
		}

		subs = append(subs, int32(len(set)))
	}

	return subs
}
