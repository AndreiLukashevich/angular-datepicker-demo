import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { DatePickerComponent } from './date-picker/date-picker.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {
            path: "",
            redirectTo: "home",
            pathMatch: "full"
        },
        { path: "home", component: HomeComponent },
        { path: "datepicker", component: DatePickerComponent },
    ])],
    exports: [RouterModule] 
})
export class AppRoutingModule { }