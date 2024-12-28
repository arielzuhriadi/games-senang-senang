const inputTugas = document.getElementById('namaTugas');
const tambah = document.getElementById('tambahTugas');
const hasilTugas = document.getElementById('tugas');
const kotak = document.getElementById('container');
const subjudul = document.getElementById('subjudul');
const kotakHasil = document.getElementById('kotakHasil');


// asynchrounous
const kode = ~~[Math.random() * 1000000];

function code(kode) {
    console.log('proses kode sedang berjalan....')
    return new Promise((success, failed) => {
        setTimeout(() => {
            if (!kode) failed('Kode salah!!!')
            success({ a: kode })
        }, 1000);
    })
}
// batasss asyn



// function ketika tambah tugas di klik
tambah.onclick = function () {
    const inputan = inputTugas.value;
    hasilTugas.innerHTML = inputan;

    async function dataGames() {
        try {
            const { a } = await code(kode);

            if (inputan == false) {
                document.getElementById('tugas').innerHTML = '<b style="color:red;">masukkan nama kamu!!!</b>';
            }else{
                document.getElementById('tugas').innerHTML = `kode redem kamu adalah <i style ="color:red";>${a}</i> <br>silahkan tukarkan di toko terdekat`
            }

        } catch (error) {
            alert('error!')
        }
    }

    dataGames()
}



// style javascript
kotak.style.maxWidth = '80%';
kotak.style.height = '40vh';
kotak.style.backgroundColor = 'darkBlue';
kotak.style.margin = '0 auto';
kotak.style.borderRadius = '10px';
kotak.style.padding = '50px';

// input
inputTugas.style.width = '100%'
inputTugas.style.padding = '10px'
inputTugas.style.borderRadius = '10px'
inputTugas.style.outline = 'none'
inputTugas.style.border = 'none'

// button tambah
tambah.style.width = '104%';
tambah.style.padding = '10px';
tambah.style.borderRadius = '10px';
tambah.style.border = 'none';
tambah.style.cursor = 'pointer';
tambah.style.backgroundColor = 'red';
tambah.style.color = 'white';
tambah.style.fontWeight = 'bold';

// h2 subjudul
subjudul.style.color = 'white';
subjudul.style.fontFamily = 'tahoma';
subjudul.style.fontSize = '1rem';

// kotak hasil
kotakHasil.style.backgroundColor = 'white';
kotakHasil.style.width = '100%';
kotakHasil.style.height = '15vh';
kotakHasil.style.borderRadius = '10px';
kotakHasil.style.padding = '10px';

// hasil tugas
hasilTugas.style.fontFamily = 'tahoma';
