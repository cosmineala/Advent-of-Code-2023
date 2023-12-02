import React from "react";

interface IProps { };

const TextDay1: React.FC<IProps> = () => {
    return (
        <article className="aocSnipit flex flex-col gap-4 text-[#cccccc] font-[300] text-lg pl-4">
            <h2>--- Day 1: Trebuchet?! ---</h2>
            <p>Something is wrong with global snow production, and you&apos;ve been selected to take a look. The Elves have even given you a map; on it, they&apos;ve used stars to mark the top fifty locations that are likely to be having problems.</p>
            <p>You&apos;ve been doing this long enough to know that to restore snow operations, you need to check all <em className="star">fifty stars</em> by December 25th.</p>
            <p>Collect stars by solving puzzles.  Two puzzles will be made available on each day in the Advent calendar; the second puzzle is unlocked when you complete the first.  Each puzzle grants <em className="star">one star</em>. Good luck!</p>
            <p>You try to ask why they can&apos;t just use a <a href="/2015/day/1">weather machine</a> (&quot;not powerful enough&quot;) and where they&apos;re even sending you (&quot;the sky&quot;) and why your map looks mostly blank (&quot;you sure ask a lot of questions&quot;) <span title="My hope is that this abomination of a run-on sentence somehow conveys the chaos of being hastily loaded into a trebuchet.">and</span> hang on did you just say the sky (&quot;of course, where do you think snow comes from&quot;) when you realize that the Elves are already loading you into a <a href="https://en.wikipedia.org/wiki/Trebuchet" target="_blank">trebuchet</a> (&quot;please hold still, we need to strap you in&quot;).</p>
            <p>As they&apos;re making the final adjustments, they discover that their calibration document (your puzzle input) has been <em>amended</em> by a very young Elf who was apparently just excited to show off her art skills. Consequently, the Elves are having trouble reading the values on the document.</p>
            <p>The newly-improved calibration document consists of lines of text; each line originally contained a specific <em>calibration value</em> that the Elves now need to recover. On each line, the calibration value can be found by combining the <em>first digit</em> and the <em>last digit</em> (in that order) to form a single <em>two-digit number</em>.</p>
            <p>For example:</p>
            <pre><code>{`1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet`}</code></pre>
            <p>In this example, the calibration values of these four lines are <code>12</code>, <code>38</code>, <code>15</code>, and <code>77</code>. Adding these together produces <code><em>142</em></code>.</p>
            <p>Consider your entire calibration document. <em>What is the sum of all of the calibration values?</em></p>
        </article>
    );
};

export default TextDay1;