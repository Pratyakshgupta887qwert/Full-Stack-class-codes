function data() {
    console.log(this);
}

const object = {name: "Akash", dummy: data};

object.dummy(); 
data();