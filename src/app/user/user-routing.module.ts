import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowseContentComponent } from './browse-content/browse-content.component';
import { CuratedComponent } from './curated/curated.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [

        {
            path: "browse",
            component: BrowseContentComponent,
        },
        {
            path: "",
            redirectTo:"/home/browse",
            pathMatch:'full'
        },
    ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }
