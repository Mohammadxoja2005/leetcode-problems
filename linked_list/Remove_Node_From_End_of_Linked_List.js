// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} head
//  * @param {number} n
//  * @return {ListNode}
//  */
// var removeNthFromEnd = function(head, n) {
//     let dummy = new ListNode(0, head);
//     let left = dummy;
//     let right = head;
//
//     while(n > 0) {
//         right = right.next;
//         n--;
//     }
//
//     while(right) {
//         left = left.next;
//         right = right.next;
//     }
//
//     left.next = left.next.next;
//
//     return dummy.next;
// };

function mapToJsonString(map) {
    function serialize(value) {
        if (value === null) {
            return 'null';
        } else if (typeof value === 'string') {
            return '"' + value + '"';
        } else if (typeof value === 'object') {
            let entries = Object.entries(value).map(([key, val]) => {
                return '"' + key + '":' + serialize(val);
            });
            return '{' + entries.join(',') + '}';
        }
    }
    return serialize(map);
}


const exampleMap = {
    name: "John"
};

const jsonString = mapToJsonString(exampleMap);
console.log(jsonString);