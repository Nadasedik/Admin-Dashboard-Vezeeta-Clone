import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  uploadPercent?: Observable<number | undefined>;
  downloadURL?: Observable<string>;
  constructor(private _storage:AngularFireStorage) { }
  uploadFile(event: { target: { files: any[]; }; }, path: any) {
    const file = event.target.files[0];
    const filePath = path;
    const fileRef = this._storage.ref(filePath);
    const task = this._storage.upload(filePath, file);
    // observe percentage changes
    this.uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL() )
    )
  }
}
