const chatListe=document.querySelector('.chat-liste');
const pencere=document.querySelector('.chat-pencere');

const yeniMesajForm=document.querySelector('.yeni-mesaj');

const yeniAdForm=document.querySelector('.ad-guncelle');
const guncelleMesaj=document.querySelector('.guncelle-mesaj');

const odalar=document.querySelector('.chat-odalar');

odalar.addEventListener('click',e=>{

    
    if(e.target.tagName==='BUTTON'){
       sohbetUI.clear();
       sohbetNesnesi.odaGuncelle(e.target.getAttribute('id'));
       sohbetNesnesi.sohbetleriGetir(data=>sohbetUI.render(data));    
    }
})


yeniMesajForm.addEventListener('submit',e=>{
    e.preventDefault();

    const mesaj=yeniMesajForm.yeni_mesaj.value.trim();
    sohbetNesnesi.mesajEkle(mesaj)
        .then(()=>yeniMesajForm.reset())
        .catch(err=>alert(err))
})

yeniAdForm.addEventListener('submit',e=>{
    e.preventDefault();

    const yeniIsim=yeniAdForm.ad_guncelle.value.trim();
    sohbetNesnesi.takmaAdGuncelle(yeniIsim);
    yeniAdForm.reset();

    guncelleMesaj.innerHTML=`Takma adınız güncellendi ${yeniIsim}`;
    setTimeout(()=>guncelleMesaj.innerHTML='',3000);
})

const takmaAd=localStorage.getItem('takmaAd') ? localStorage.getItem('takmaAd'):'anonim';

const sohbetUI=new SohbetUI(chatListe);
const sohbetNesnesi=new Sohbet('yazılım',takmaAd);

sohbetNesnesi.sohbetleriGetir(data=>sohbetUI.render(data));
pencere.style.display='block'; 