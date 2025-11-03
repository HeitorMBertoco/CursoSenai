#!/usr/bin/env bash
set -euo pipefail

DEST="/c/xampp/htdocs/pokedex/imagens/pokemons"   # ajuste se necessário
mkdir -p "$DEST"

have_cmd() { command -v "$1" >/dev/null 2>&1; }

if have_cmd curl; then
  dl() { curl -fsSL "$1" -o "$2"; }
elif have_cmd wget; then
  dl() { wget -q "$1" -O "$2"; }
else
  echo "Instale curl ou wget." >&2
  exit 1
fi

for n in $(seq 252 386); do
  id3=$(printf "%03d" "$n")
  out="$DEST/pokemon_${id3}.png"

  url_main="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${n}.png"
  url_fallback="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${n}.png"

  if dl "$url_main" "$out"; then
    echo "OK  official-artwork -> $out"
  else
    echo "Falhou official-artwork; tentando sprite..."
    dl "$url_fallback" "$out" && echo "OK  sprite -> $out"
  fi
done