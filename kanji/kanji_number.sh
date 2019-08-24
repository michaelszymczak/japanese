#!/bin/bash
set -euo pipefail

cat heisign_kanji_list.txt | grep ""^[^0-9]*$1[^0-9]"" | cut -f 2 | sed "s/$/ \(/"
