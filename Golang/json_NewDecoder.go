package main

import (
	"encoding/json"
	"fmt"
	"strings"
)

const jsonStream = `
	{
		"noun":{
			"syn":[
        	  	"hullo",
           		"hi",
           		"howdy",
           		"how-do-you-do",
           		"greeting",
	       		"salutation"
        	]
		}
	}
`

type synonyms struct {
	Noun *words `json:"noun"`
	Verb *words `json:"verb"`
}
type words struct {
	Syn []string `json:"syn"`
}

func main() {
	var syns []string
	var data synonyms

	if err := json.NewDecoder(strings.NewReader(jsonStream)).Decode(&data); err != nil {
		return
	}
	//fmt.Println(data.Noun.Syn)
	//fmt.Println(data.Verb.Syn)	// panic が起きる
	//fmt.Println(data.Verb) 	// <nil>
	syns = append(syns, data.Noun.Syn...)
	if data.Verb != nil {
		syns = append(syns, data.Verb.Syn...) // data.Verb.Syn にデータが入っているか判定(if data.Verb.Syn != nil {} で判定すると panic になる)
	}
	fmt.Println(syns)
}
