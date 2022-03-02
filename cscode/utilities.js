"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Utilities = void 0;
class Utilities {
    static getDataFromServer() {
        throw new Error('Method not implemented.');
    }
    getJSON(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'json';
        xhr.onload = function () {
            var status = xhr.status;
            if (status === 200) {
                callback(null, xhr.response);
            }
            else {
                callback(status, xhr.response);
            }
        };
        return xhr.send();
    }
    checkForErrorsInData(error, data) {
        if (error !== null) {
            alert('Something went wrong: ' + error);
        }
        else {
            return alert(JSON.stringify(data));
        }
    }
    getDataFromServer() {
        this.getJSON('server/restAPI.php', this.checkForErrorsInData(this.error, this.data));
    }
}
exports.Utilities = Utilities;
