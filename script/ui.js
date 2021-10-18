class SohbetUI{
    constructor(liste){
        this.liste=liste;
    }

    clear(){
        this.liste.innerHTML='';
    }

    render(veri){

        const kacGun=dateFns.distanceInWordsToNow(
            veri.tarih.toDate()
        );

        const html=`
            <li class="collection-item">
                <span class="takmaAd">${veri.takmaAd}</span>
                <span class="mesaj">${veri.mesaj}</span>
                <span class="tarih">${kacGun}</span>
            </li>
        `;

        this.liste.innerHTML += html;
    }
}