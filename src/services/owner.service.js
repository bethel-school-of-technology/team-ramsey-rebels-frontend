import firebase from "../firebase";

const db = firebase.firestore().collection("owners");

class OwnerDataService {
  getAll() {
    return db;
  }

  create(owner) {
    return db.add(owner);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new OwnerDataService();