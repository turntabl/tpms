export class Data {
    logged_date:string;
    project_hours: number;
    vacation: string;
    sick:string;
    volunteering_hours:number;

    public static addDays(date: Date, days: number): Date {
        date.setDate(date.getDate() + days);
        return date;
    }
}

