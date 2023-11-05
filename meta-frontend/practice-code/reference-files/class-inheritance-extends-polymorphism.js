class Liquid {
    pour(){
        console.log("Splash!")
    }
}

class Honey extends Liquid{
    pour(){
        console.log(`You try to pour the honey...
This is gonna take awhile...
Any minute now...,
It's not happenin'`);
    }
}

class Acid extends Liquid{
    pour(){
        console.log("You pour the acid")
        const pour = super.pour()
        console.log('Now the ground is burning!')
    }
}

const bearHoney = new Honey();
const hydrochloricAcid  = new Acid();
bearHoney.pour();
hydrochloricAcid.pour();