import { TestBed } from '@angular/core/testing';

import { DocumentsUploadService } from './documents-upload.service';

describe('DocumentsUploadService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DocumentsUploadService = TestBed.get(DocumentsUploadService);
    expect(service).toBeTruthy();
  });
});
