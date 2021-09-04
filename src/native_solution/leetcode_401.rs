pub fn add_strings(num1: String, num2: String) -> String {
    let mut res = Vec::new();
        let mut i = num1.len();
        let mut j = num2.len();
        let mut carry = 0;

        while i > 0 || j > 0{
            let n1 = { 
                if i > 0 {
                    num1.as_bytes()[i-1] - '0' as u8
                } else {
                     0 
                }  
            };
            let n2 = {
                if j > 0 {
                    num2.as_bytes()[j-1] - '0' as u8
                } else {
                    0 
                }
            };
            let tmp = n1 + n2 + carry;
            carry = tmp / 10;
            res.push(tmp % 10 + '0' as u8);
            if i > 0 {i -= 1;} 
            if j > 0 {j -= 1;}
        }
        if carry == 1 {
            res.push('1' as u8);
        } 
        res.reverse();
        String::from_utf8(res).unwrap()
}


#[test]
fn test_add_strings(){
    let num1 = String::from("9039");
    let num2 = String::from("19");
    println!("{:?}",add_strings(num1, num2));
}