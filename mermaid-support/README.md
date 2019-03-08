---
title: add support for mermaidjs markdown engine.
date: "2019-01-02"
---

# sample mermaid

<Mermaid/>
### graph diagram 
<div class="mermaid">
graph TD
    A[Christmas] -->|Get money| B(Go shopping)
    B --> C{Let me think}
    C -->|One| D[Laptop]
    C -->|Two| E[iPhone]
    C -->|Three| F[Car]
</div>

### Sequence diagram

<div class="mermaid">
sequenceDiagram
    Alice->>+John: Hello John, how are you?
    John-->>-Alice: Great!
</div>

### flow chart

<div class="mermaid">
graph LR
    A-- text -->B
</div>
