import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditPrPage } from './edit-pr.page';

describe('EditPrPage', () => {
  let component: EditPrPage;
  let fixture: ComponentFixture<EditPrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditPrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
