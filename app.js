const persegiPanjangForm = document.getElementById("persegiPanjangForm");

const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar");
const demoContainer = document.getElementById("demoContainer");

const pPanjang = JSON.parse(localStorage.getItem("pp")) || [];

const addPp = (panjang, lebar, hasil) => {
    pPanjang.push({
        panjang,
        lebar,
        hasil
    });

    localStorage.setItem("pp", JSON.stringify(pPanjang));

    return {panjang, lebar, hasil};
};

const createPp = ({panjang, lebar, hasil}) => {
    const perpanDiv = document.createElement("div");
    const panjangPp = document.createElement("p");
    const lebarPp = document.createElement("p");
    const hasilPp = document.createElement("h2");

    panjangPp.innerHTML = "Panjang Persegi Panjang : " + panjang;
    lebarPp.innerHTML = "Lebar Persegi Panjang : " + lebar;
    hasilPp.innerHTML = "Hasil Luasnya adalah : " + hasil;

    perpanDiv.append(panjangPp, lebarPp, hasilPp);
    demoContainer.appendChild(perpanDiv);
};

pPanjang.forEach(createPp);

persegiPanjangForm.onsubmit = e => {
    e.preventDefault();

    const vPanjang = panjang.value;
    const vLebar = lebar.value;
    const luas = (vPanjang * vLebar);

    const newPp = addPp (
        vPanjang, 
        vLebar,
        luas
    );

    createPp(newPp);

    panjang.value = "";
    lebar.value = "";
};



