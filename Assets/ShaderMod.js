#pragma strict

function Update () {
	renderer.material.SetFloat("_ModAmount", Mathf.Sin(Time.time * 4.5) * 5.0);
}

function OnGUI() {
	GUI.DrawTexture(Rect(0, 0, 64, 64), renderer.material.GetTexture("_ModTex"));
}