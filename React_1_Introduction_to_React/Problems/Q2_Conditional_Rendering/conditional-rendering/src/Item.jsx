export default function Item({ name, isPacked }) {
    console.log(isPacked)
    return (
        <>
            {/* Write your code here */}
            <div className="item">
                {name} {isPacked ? '\u2714': '\u274C' }
            </div>  
        </>
    );
}