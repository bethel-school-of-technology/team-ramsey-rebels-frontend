import firebase from "../firebase";

const db = firebase.firestore().collection("requests");

class RequestDataService {
  getAll() {
    return db;
  }

  create(request) {
    return db.add(request);
  }

  update(id, value) {
    return db.doc(id).update(value);
  }

  delete(id) {
    return db.doc(id).delete();
  }
}

export default new RequestDataService();