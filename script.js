const dbRef = firebase.database().ref();

function load() {

    dbRef.get().then((data) => {
        const visitorCount = Number(data.val().visitors) + 1
        document.querySelector(".counter").textContent = visitorCount
        dbRef.update({
            visitors: visitorCount
        })
    })

}

document.querySelector(".counter").addEventListener("load", load())