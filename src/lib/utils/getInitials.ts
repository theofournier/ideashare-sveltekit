export const getInitials = (firstName: string | undefined | null, lastName: string | undefined | null): string => {
    let initials = "";
    if(firstName) {
        initials = initials.concat(firstName[0]);
    }
    if(lastName) {
        initials = initials.concat(lastName[0]);
    }
    return initials;
}