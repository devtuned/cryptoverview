import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ElasticityChartComponent } from './elasticity-chart.component'

describe('ElasticityChartComponent', () => {
  let component: ElasticityChartComponent
  let fixture: ComponentFixture<ElasticityChartComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ElasticityChartComponent],
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ElasticityChartComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
