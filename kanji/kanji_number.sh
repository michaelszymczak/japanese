#!/bin/bash
set -euo pipefail

cat heisign_kanji_list.txt | grep "^$1" | cut -f 2 | sed "s/$/ \(/"
