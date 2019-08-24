#!/bin/bash
set -euo pipefail

./kanji_number.sh "$1" | xargs echo -n | xclip -selection clipboard
