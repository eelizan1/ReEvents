import firebase from "../config/firebase";

// file to store the firebase queries

const db = firebase.firestore();

export function dataFromSnapshot(snapshot) {
  if (!snapshot.exists) return undefined;
  const data = snapshot.data();

  // loop all the properties in data
  // correct time stamp
  for (const prop in data) {
    if (data.hasOwnProperty(prop)) {
      if (data[prop] instanceof firebase.firestore.Timestamp) {
        // turn into javascript date
        data[prop] = data[prop].toDate();
      }
    }
  }

  return {
    ...data,
    id: snapshot.id,
  };
}

export function getEventsFromFirestore(oberserver) {
  // 'events' is the collection name
  return db.collection("events").onSnapshot(oberserver);
}
