1. Newton Second Law
STORE "massa" with value 600kg
STORE "percepatan" with value 2m / s2
STORE "resultan gaya" without any value

CALCULATE "massa" times "percepatan"
SET "resultan gaya" value with calculation result

DISPLAY "resultan gaya"

2. Tahun Kabisat
JIKA TAHUN % 4 adalah 0
KEMUDIAN
JIKA TAHUN % 100 adalah 0
KEMUDIAN
JIKA TAHUN % 400 adalah 0
KEMUDIAN
adalah "TAHUN KABISAT"
JIKA TIDAK
adalah "TAHUN BIASA"


3. Laundry Day
SET`MESIN CUCI`
SET`JUMLAH PAKAIAN`
STORE`JUMLAH PAKAIAN` with 0
  WHILE`JUMLAH PAKAIAN` < 21
ADD`JUMLAH PAKAIAN` by 1
DISPLAY`JUMLAH PAKAIAN`
START`MESIN CUCI`

4. Periksa Kuku
SET`KUKU`
STORE`MURID` to 0
WHILE`MURID` < 41
ADD`MURID` by 1
IF`KUKU` = "PANJANG" THEN
"HUKUM"
ELSE
"PUJI"
END IF