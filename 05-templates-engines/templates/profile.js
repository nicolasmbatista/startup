(function() {
  dust.register("dust", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"profile-dust\" style=\"text-align:center\"><h1><u>Dust</u></h1><table align=center border=1><tr><td><img src = \"").reference(ctx.get("profileImg"), ctx, "h").write("\"></img></td><td><h1>").reference(ctx.get("name"), ctx, "h").write("</h1><h2>").reference(ctx.get("currentJob"), ctx, "h").write("</h2><h3>").reference(ctx.get("location"), ctx, "h").write(" | ").reference(ctx.get("industry"), ctx, "h").write("</h3></td></tr><tr><td colspan=2><h3>Personal description</h3><p>\t\t  ").reference(ctx.get("description"), ctx, "h").write("</p><h3>Job Experience</h3><ul>").section(ctx.get("jobs"), ctx, {
      "block": body_1
    }, null).write("</ul></td></tr></table></div>");
  }
  function body_1(chk, ctx) {
    return chk.write("<li><b>").reference(ctx.get("company"), ctx, "h").write("</b> ").reference(ctx.get("description"), ctx, "h").write("</li>");
  }
  return body_0;
})();