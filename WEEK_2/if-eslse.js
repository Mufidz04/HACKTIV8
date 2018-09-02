var nama = 'Mikael';
var peran = '';
//Check nama harus diisi
if (nama === '') {
    console.log('nama harus diisi!')
}
else if (peran === '') {
    console.log('Halo ' + nama + ' Pilih peranmu untuk memulai game!')
}
else {
    console.log(' Selamat datang di Dunia Proxytia, ' + nama)
    switch (peran) {
        case 'Ksatria':
        console.log( "Halo Ksatria " + nama + ", kamu dapat menyerang dengan senjatamu!")
            break;
        case 'Tabib':
        console.log ( "Halo Tabib " + nama + ", kamu dapat menyerang dengan senjatamu!")
            break;
        case 'Penyihir': 
        console.log ("Halo Penyihir " + nama + ", ciptakan keajaiban yang membantu kemenanganmu!")
            break;
        default : console.log('Halo ' + nama + ' Pilih peranmu untuk memulai game!')
            break;
    }
}