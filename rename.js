//hàm (taskName, timecompletetask) 
//=> 1. Cùng 1 lúc call 3 task ra ngoài (call ham nhiều lần truyền tham số khác nhau)
//=> 2. sau khi complete 3 task => run task 4



function doTask(taskName, timeCompleteTask) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log(`${taskName} called.`);
        resolve();
      }, timeCompleteTask);
    });
  }
  
  function callTasks() {
    const tasks = [
      { name: 'Task 1', time: 2000},
      { name: 'Task 2', time: 3000},
      { name: 'Task 3', time: 5000}
    ];
    const promises = tasks.map(task => doTask(task.name, task.time));
  
    Promise.all(promises)
      .then(() => {
        setTimeout(() => {
            anotherFunction();
        }, 2000)
      })
  }

  function anotherFunction() {
    console.log('Task 4 called.');
  }
  
  callTasks();


//callback
const xinSdt = (callback) => {
    let sdt;
    console.log('1 - Gọi điện cho thằnng bạn XYZ, cho tao xin số của thằng ABC');
    console.log('2 - XYZ đang tìm số của ABC cho bạn');
    
    setTimeout(() => {
        sdt = 123456789;
        console.log('3 - XYZ đã tìm thấy số của ABC');
        
        callback(sdt);
    }, 1000);
};

const hienThiSdtSauKhiNhan = sdt => console.log(`4 - Số điện thoại của ABC là ${sdt}`);

xinSdt(hienThiSdtSauKhiNhan);



//xin sdt
let forPhone = () => {
    console.log('A call B for find out phone of C')
    console.log('B search for phone C for A')

    let findTrue = true;
    let findPhone = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(findTrue) {
                 numberPhone = '0985335621'
                console.log('B has phone of C is')
                resolve(numberPhone)
            } else {
                reject('B has not phone of C')
            }
        }, 2000);
    })

    return findPhone;
}

let battery = (numberPhone) => {
    console.log('B is powering for Pin')

    let pinGood = true;
    let pinCharge = new Promise((resolve, reject) => {
        if(pinGood) {
            console.log('Pin full')
            resolve(numberPhone)
        } else {
            reject('Pin out of')
        }
    }, 2000)

    return pinCharge;
}

let phone = (numberPhone) => {
    console.log(`A has the number phone of C is: ${numberPhone}`)
}

// forPhone()
//     .then((numberPhone) => battery(numberPhone))
//     .then ((numberPhone) => phone(numberPhone))
//     .catch ((error) => console.log(error))


let active = async () => {
    try {
        let sdt = await forPhone()
        battery(sdt)
        phone(sdt)
    } catch (error)  {
        console.log(error)
    }

    }

active()


