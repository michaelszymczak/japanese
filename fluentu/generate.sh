#!/bin/sh

# video vocab, sroll to the bottom, f12, body, ctrl-c > input.txt

cat input.txt | sed 's/<div/\n<div/g' | grep "data-word-id=" | grep "data-definition=" | sed 's/^.*data-word="\([^"]*\)".*data-pinyin="\([^"]*\)".*data-definition="\([^"]\+\)".*$/\1\t\2\t\3/'  | groovy g.groovy > output.txt
