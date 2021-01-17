import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { DailyQuote } from 'src/interfaces/daily-quote';
import { NewBoard } from 'src/interfaces/new-board';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  xAuthToken = null;
  boardId = null;
  viewFolderResponse = null;
  createFolderResponse = null;
  deleteFolderResponse = null;
  renameFolderResponse = null;
  createFileResponse = null;
  viewFileResponse = null;
  deleteFileResponse = null;
  renameFileResponse = null;
  getFilesDetails = null;
  dummyQuote: DailyQuote[] = [];

  constructor(private http: HttpClient, public router: Router) { }


  // ........................... FILE APIS........................................

  // ........................... CREATE FILE ........................................
  async createBoardData(boardData): Promise<NewBoard> {
    this.xAuthToken = localStorage.getItem('token');
    const body = boardData;
    await this.http.post('https://api.canvasboard.live/api/v1/user/folder/create-file', body, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
      .then((response) => {
      // this.boardId = JSON.parse(JSON.stringify(res)).board_id;
        this.createFileResponse = JSON.parse(JSON.stringify(response)).file;
    });
    return this.createFileResponse;

  }
  // ........................... UPDATE FILE ........................................

  async saveBoardData(boardData) {
    this.xAuthToken = localStorage.getItem('token');
    const body = boardData;
    await this.http.post('https://api.canvasboard.live/api/v1/user/folder/edit-file', body, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
      .then((response) => {
      });
  }

  // ........................... GET FILE...........................................

  async getBoardData(boardId) {
    this.xAuthToken = localStorage.getItem('token');
    await this.http.get(`https://api.canvasboard.live/api/v1/user/files/${boardId}`, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
      .then((response) => {
      this.viewFileResponse = response;
    });
    return this.viewFileResponse;

  }

  // ........................... DELETE File ........................................
  async deleteFile(folderId, fileId) {
    this.xAuthToken = localStorage.getItem('token');
    await this.http.delete(`https://api.canvasboard.live/api/v1/user/folder/remove-file?folder_id=${folderId}&file_id=${fileId}`, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
      .then((response) => {
        this.deleteFileResponse = response;
      });
    return this.deleteFileResponse;
  }
  // ........................... RENAME FILE ........................................
  async renameFile(body) {
    this.xAuthToken = localStorage.getItem('token');
    await this.http.post(`https://api.canvasboard.live/api/v1/user/folder/rename-file`, body, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
      .then((response) => {
        this.renameFileResponse = response;
      });
    return this.renameFileResponse;
  }

  // ........................... DASHBOARD APIS........................................

  // ........................... GET FOLDERS...........................................
  async getFoldersData() {
    this.xAuthToken = localStorage.getItem('token');
    await this.http.get(`https://api.canvasboard.live/api/v1/user/view-folders/`, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
      .then((response) => {
        this.viewFolderResponse = response;
      });
    return this.viewFolderResponse;
  }
  // ........................... CREATE FOLDER ........................................
  async createFolder(body) {
    this.xAuthToken = localStorage.getItem('token');
    await this.http.post(`https://api.canvasboard.live/api/v1/user/create-folder`, body, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
      .then((response) => {
        this.createFolderResponse = response;
      });
    return this.createFolderResponse;
  }
  // ........................... DELETE FOLDER ........................................
  async deleteFolder(value) {
    this.xAuthToken = localStorage.getItem('token');
    await this.http.delete(`https://api.canvasboard.live/api/v1/user/remove-folder?folder_id=${value}`, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
      .then((response) => {
        this.deleteFolderResponse = response;
      });
    return this.deleteFolderResponse;
  }
  // ........................... UPDATE FOLDER ........................................
  async renameFolder(body) {
    this.xAuthToken = localStorage.getItem('token');
    await this.http.post(`https://api.canvasboard.live/api/v1/user/rename-folder`, body, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
    .then((response) => {
      this.renameFolderResponse = response;
    });
    return this.renameFolderResponse;
  }
  // ........................... FILES APIS........................................

  // ........................... GET FILES........................................
  async getFilesData(id) {
    this.xAuthToken = localStorage.getItem('token');
    await this.http.get(`https://api.canvasboard.live/api/v1/user/folder/files/${id}`, {
      headers: new HttpHeaders({
        'X-AUTH-TOKEN': this.xAuthToken
      })
    }).toPromise()
      .then((response) => {
        this.getFilesDetails = response;
      });
    return this.getFilesDetails;
  }
  // .........................DAILY QUOTES API...................................
  getDailyQuote() {
    return this.http.get('https://quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com/quote', {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Access-Control-Allow-Headers': 'X-Requested-With,content-type,Access-Control-Allow-Origin',
        'Access-Control-Allow-Credentials': 'true',
        'x-rapidapi-key': '318ed0c148msh279b4a7589d2c18p1db725jsnaa114ac4aa88',
        'x-rapidapi-host': 'quotes-inspirational-quotes-motivational-quotes.p.rapidapi.com',
        useQueryString: 'true'
      })
    }).toPromise();
  }
  getDummyQuote() {
    // We need this Dummy Quotes when the API would not get a response
    this.dummyQuote = [{
      author: 'Nelson Mandela',
      text: 'It always seems impossible until its done.'
    },
    {
      author: 'Dalai Lama',
      text: 'Be kind whenever possible.It is always possible.'
    },
    {
      author: 'Walt Disney',
      text: 'If you can dream it, you can do it.'
    },
    {
      author: 'Elon Musk',
      text: 'When something is important enough, you do it even if the odds are not in you favour.'
    },
    {
      author: 'Walt Disney',
      text: 'If you can dream it, you can do it.'
    }];

    // This function get a random number within the range of the length of the dailyQuote array.
    function randomQuote(min: number, max: number) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    // This returns one key-value pair from the array of objects
    return this.dummyQuote[randomQuote(0, 5)];
  }
}
