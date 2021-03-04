import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegformPage } from './regform.page';

describe('RegformPage', () => {
  let component: RegformPage;
  let fixture: ComponentFixture<RegformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
