export function output(n){
    if(n === 0){
        return [
            [
                90, 90, 90, 180,
                180, 90, 180, 180,
                180, 180, 180, 180,
                180, 180, 180, 180,
                180, 90, 0, 180,
                90, 90, 90, 0
            ],
            [
                0, 90, 90, 90,
                180, 0, 90, 180,
                180, 180, 180, 180,
                180, 180, 180, 180,
                180, 180, 90, 180,
                180, 90, 90, 90
            ]
        ]
    }
    if(n === 1){
        return [
            [
                90, 90, 180, 45,
                90, 180, 180, 45,
                45, 180, 180, 45,
                45, 180, 180, 45, 
                90, 0, 90, 180,
                90, 90, 90, 0
            ],
            [
                0, 90, 90, 45, 
                180, 90, 180, 45, 
                45, 180, 180, 45, 
                45, 180, 180, 45, 
                0, 90, 180, 90, 
                180, 90, 90, 90
            ]
        ]
    }
}
