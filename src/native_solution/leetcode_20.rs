use std::collections::HashMap;

pub fn is_valid(s: String) -> bool {
    let mut stack : Vec<String>= Vec::new();
    if s.len()%2!=0{
        return false
    }
    let mut map: HashMap<&str,&str> = HashMap::new();
    map.insert(")", "(");
    map.insert("]", "[");
    map.insert("}", "{");
    for (_,&str) in s.as_bytes().iter().enumerate(){
        match str {
            b'('|b'['|b'{'=>{
                stack.push(str.to_string());
            },
            b')'|b']'|b'}'=>{
                let top = stack.pop().unwrap();
                if str.to_string()!=top{
                  return false  
                }else{
                    stack.pop();
                };
            }
            _=>{
                
            }
        }
    };
    stack.len()==0
}

#[test]

pub fn test_is_valid(){
    let res = is_valid("(){}".to_string());
    let array = vec![1,2,3];
    let pop = array.clone().pop().unwrap_or_else(|| 2);
    println!("{:?}",pop);
    assert_eq!(false, res);
}