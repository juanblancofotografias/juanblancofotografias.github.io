a=1
for i in *.jpg; do
  new=$(printf "F%02d.jpg" "$a") #04 pad to length of 4
  mv -i -- "$i" "$new"
  let a=a+1
done

mkdir thumbnails
for i in $(ls *.jpg); do convert -scale 100 $i thumbnails/$i; done

for i in *.jpg; do
  printf "<a href='assets/img/C15/$i' data-gallery>\n"
  printf "  <img src='assets/img/C15/thumbnails/$i'>\n"
  echo "</a>"
done
