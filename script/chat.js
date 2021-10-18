class Chat {

    constructor(room, nickname) {
        this.room = room;
        this.nickname = nickname;
        this.chats = db.collection('chats');
    }

    async addToMessage(message) {
        const now = new Date();
        const chat = {
            message,
            nickname: this.nickname ,
            room: this.room,
            date: firebase.firestore.Timestamp.fromDate(now)
        };

        const res = await this.chats.add(chat);
        return res;
    }
};

const chatObject = new Chat('software', 'shoshin');

// chatObject.addToMessage('nasılsınız').then(() => {
//     console.log('mesajınız eklendi');
// });