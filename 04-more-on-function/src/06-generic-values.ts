function minimumLength<Type extends { length: number}>(obj: Type, minimun: number): Type{
    if (obj.length > minimun){
        return obj
    } else {
        const type: Type = obj;
        return type; 
    }
}