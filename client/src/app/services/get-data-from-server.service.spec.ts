import { TestBed, inject } from '@angular/core/testing';

import { GetDataFromServerService } from './get-data-from-server.service';

describe('GetDataFromServerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetDataFromServerService]
    });
  });

  it('should be created', inject([GetDataFromServerService], (service: GetDataFromServerService) => {
    expect(service).toBeTruthy();
  }));
});
