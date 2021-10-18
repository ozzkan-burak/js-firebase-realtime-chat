class Sohbet{

    constructor(oda,takmaAd){
        this.oda=oda;
        this.takmaAd=takmaAd;
        this.sohbetler=db.collection('sohbetler');
        this.unsub;
    }

    async mesajEkle(mesaj){

        const now=new Date();
        const sohbet={
            mesaj,
            takmaAd:this.takmaAd,
            oda:this.oda,
            tarih:firebase.firestore.Timestamp.fromDate(now)
        };

        const res=await this.sohbetler.add(sohbet);
        return res;
    }

    sohbetleriGetir(callback){
        this.unsub=this.sohbetler
        .where('oda','==',this.oda)
        .orderBy('tarih')
        .onSnapshot(snap=>{
            snap.docChanges().forEach(change=>{
                if(change.type=='added'){
                    //ui güncelle
                    callback(change.doc.data());
                }
            })
        })
    }

    takmaAdGuncelle(takmaAd){
        this.takmaAd=takmaAd;
        localStorage.setItem('takmaAd',this.takmaAd);
    }

    odaGuncelle(oda){
        this.oda=oda;
        console.log('oda güncellendi');

        if(this.unsub){
            this.unsub();
        }
    }
};



