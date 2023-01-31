import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageListChannelNameComponent } from './page-list-channel-name.component';

describe('PageListChannelNameComponent', () => {
  let component: PageListChannelNameComponent;
  let fixture: ComponentFixture<PageListChannelNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageListChannelNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageListChannelNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
