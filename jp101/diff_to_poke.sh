#!/bin/sh

iconv -f UTF-16LE -t UTF-8 japanesepod101_mywordbank.csv -o japanesepod101_mywordbank.utf8.csv
#cat japanesepod101_mywordbank.utf8.csv| tr ',' '\t' | cut -f1,2,4 | tail -n +2 > poke.txt
cat japanesepod101_mywordbank.utf8.csv | sort > japanesepod101_mywordbank.utf8.sorted.csv
git diff japanesepod101_mywordbank.utf8.sorted.csv | grep "^+[^+]" | sed 's/\+//' | tr ',' '\t' | cut -f1,2,4 > poke.txt
