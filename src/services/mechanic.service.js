import firebase from "../firebase";

const db = firebase.firestore().collection("mechanics");

class MechanicDataService {
  getAll() {
    return db;
  }

  create(mechanic) {
    return db.add(mechanic);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new MechanicDataService();